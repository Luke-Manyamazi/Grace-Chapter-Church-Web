import { useQuery } from '@tanstack/react-query';

const CHANNEL_HANDLE = 'GraceChapterChurch';

async function fetchLatestSermons() {
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
  if (!apiKey) throw new Error('VITE_YOUTUBE_API_KEY not set');

  // Resolve channel handle → uploads playlist ID
  const chRes = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forHandle=${CHANNEL_HANDLE}&key=${apiKey}`
  );
  if (!chRes.ok) throw new Error(`Channels API error: ${chRes.status}`);
  const chData = await chRes.json();

  const uploadsId = chData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
  if (!uploadsId) throw new Error('Uploads playlist not found');

  // Fetch latest 5 videos from uploads playlist
  const plRes = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsId}&maxResults=5&key=${apiKey}`
  );
  if (!plRes.ok) throw new Error(`PlaylistItems API error: ${plRes.status}`);
  const plData = await plRes.json();

  return plData.items.map((item) => ({
    title: item.snippet.title,
    videoId: item.snippet.resourceId.videoId,
    description: item.snippet.description?.split('\n')[0] ?? '',
    thumbnail:
      item.snippet.thumbnails?.maxres?.url ??
      item.snippet.thumbnails?.high?.url ??
      `https://img.youtube.com/vi/${item.snippet.resourceId.videoId}/hqdefault.jpg`,
    publishedAt: item.snippet.publishedAt,
  }));
}

export function useLatestSermons() {
  return useQuery({
    queryKey: ['latest-sermons'],
    queryFn: fetchLatestSermons,
    staleTime: 1000 * 60 * 60,   // cache for 1 hour
    retry: 1,
  });
}
