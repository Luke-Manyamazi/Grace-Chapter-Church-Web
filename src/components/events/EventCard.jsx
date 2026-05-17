import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Phone } from "lucide-react";

export default function EventCard({ event, index, featured = false }) {
  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-card rounded-2xl overflow-hidden shadow-xl border border-border"
      >
        <div className="relative h-64 md:h-80">
          <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="inline-block bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full mb-3">
              Featured Event
            </span>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground">{event.title}</h3>
          </div>
        </div>
        <div className="p-8">
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Calendar className="w-4 h-4 text-accent" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Clock className="w-4 h-4 text-accent" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="w-4 h-4 text-accent" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Phone className="w-4 h-4 text-accent" />
              <span>{event.contact}</span>
            </div>
          </div>
          {event.details && (
            <p className="text-muted-foreground leading-relaxed">{event.details}</p>
          )}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-all"
    >
      <h3 className="font-heading text-xl font-semibold mb-4">{event.title}</h3>
      <div className="space-y-2">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4 text-accent" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <Clock className="w-4 h-4 text-accent" />
          <span>{event.time}</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4 text-accent" />
          <span>{event.location}</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <Phone className="w-4 h-4 text-accent" />
          <span>{event.contact}</span>
        </div>
      </div>
    </motion.div>
  );
}