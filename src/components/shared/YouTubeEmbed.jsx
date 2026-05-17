import React, { useState } from 'react';
import { Play } from 'lucide-react';

/**
 * Lazy YouTube embed: shows a thumbnail with a play button and only
 * mounts the iframe after the user clicks. Uses youtube-nocookie.com
 * for enhanced privacy and iframe sandbox for security.
 *
 * @param {string} videoId  - YouTube video ID, or "videoseries?list=..." for playlists
 * @param {string} title    - Descriptive title for accessibility
 * @param {string} className - Optional wrapper class overrides
 */
export default function YouTubeEmbed({ videoId, title, className = '' }) {
  const [active, setActive] = useState(false);

  const isPlaylist = videoId.startsWith('videoseries');
  const thumbSrc = isPlaylist
    ? null
    : `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  const embedSrc = `https://www.youtube-nocookie.com/embed/${videoId}${isPlaylist ? '' : `?autoplay=1&rel=0&modestbranding=1`}`;

  return (
    <div className={`relative aspect-video bg-black overflow-hidden ${className}`}>
      {active ? (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={embedSrc}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          /* sandbox: minimum required permissions for YouTube to work */
          sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="absolute inset-0 w-full h-full group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label={`Play video: ${title}`}
        >
          {thumbSrc ? (
            <img
              src={thumbSrc}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          ) : (
            /* Playlist: no thumbnail available */
            <div className="w-full h-full bg-black/80 flex items-center justify-center">
              <p className="text-white/40 text-xs tracking-widest uppercase font-semibold px-4 text-center">{title}</p>
            </div>
          )}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" aria-hidden="true" />
          <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <div className="w-16 h-16 bg-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
              <Play className="w-6 h-6 text-black fill-black ml-1" />
            </div>
          </div>
        </button>
      )}
    </div>
  );
}
