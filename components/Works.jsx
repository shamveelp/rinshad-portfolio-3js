'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ExternalLink, Calendar, Eye, X, Loader2, Maximize2, Minimize2 } from 'lucide-react';

// Video files from public/videos folder
const videoFiles = [
  'AQM7i7yQNek4M3CRSHRHmitVvaSnRsYGsL9J8ww5UrJFBeo4Py1DnHyRY5CjrUTv06lRlPCI0em-m6JUufNyuOYiXS4bXTkGxQjYPio.mp4',
  'AQMjo1jVvTFViDh_d9BcKeikUV8QC5hjfp-4Rv6K2HcYd2u1wK8i9YOkLdpq4JlADLyrbVSGqYDk3QeTh3SqBnYxdeAZA6tZhcKu0ao.mp4',
  'AQMrrqGx0D_sZ6YIWV5AWXpJULita8bIvnReoY6ZIoJJ1iKOGyonEXLVF1quN_Dh_bxxydSAcwvK6LmeXmV9cYScbUDybV2V67rBd9w.mp4',
  'AQN7BI9_qldllx9ehCQG--FELFNFvus7oJjI45CtjEipvXI1xNY78O0Ho_9ylWDWq5pmkgbjCA5QMG_NBe7no9djSXAxp3L9wbBPQVo.mp4',
  'AQNNImLDoLMtcyAN1ZOG8rFtvDVXYzA-XyOMm0QlHb5YcXY2K6szz9AJmzYKKu2F0ifSK1gHUsWZ7yXIXbrNjXkqpxgOEcY3YhV_ZbY.mp4',
  'AQOKosoIxyCurnBIMIkz1ICCchILMEXTpL3HgWuv95TGK8XghyRfPmM8vDDEuMg4EIoGO_YuJgxIeb5NAi4P5CpRfDJzCZcPra2ncQ4 (1).mp4',
  'AQOYwMgtPpHP7DuqCtdPULjwAaDrOxL0l4P9MdgbJzZExqIUBTZXrKJ9PH3sXk6jpBbjCmQRsEfiiJXRKq1lS9418OA3nxbBqYlahKM.mp4',
  'IMG_3181.MP4',
  'IMG_4261.MOV',
  'IMG_4755.MOV',
  'IMG_4901.MP4',
  'IMG_5296.MP4',
  'IMG_5297.MP4',
  'IMG_5298.MOV',
  'IMG_6913.MOV',
  'IMG_7050.MOV',
  'IMG_8871.MP4',
  'IMG_9745.MOV',
  'IMG_9849.MOV',
  'IMG_9878.MOV',
  'one team ad .mov',
  'onmprmo2.0 2.mov',
  'Video-850.mp4',
];

// Categories for distribution
const categoryDistribution = ['Direction', 'Editing', 'Ads', 'Content', 'Acting'];

// Generate video works from files (deterministic for SSR)
const generateVideoWorks = () => {
  return videoFiles.map((file, index) => {
    const fileName = file.replace(/\.[^/.]+$/, '').replace(/[^a-zA-Z0-9]/g, ' ');
    const category = categoryDistribution[index % categoryDistribution.length];
    const isFeatured = index < 3; // First 3 videos are featured
    
    // Deterministic date and views (no random values)
    const monthIndex = 11 - (index % 12);
    const day = 15 - (index % 15);
    const date = new Date(2024, monthIndex, day).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    const views = `${((index * 7) % 90) + 10}K`; // Deterministic based on index
    
    return {
      id: `video-${index + 1}`,
      title: fileName.length > 30 ? fileName.substring(0, 30) + '...' : fileName,
      description: `Creative video work showcasing ${category.toLowerCase()} skills and artistic vision.`,
      thumbnail: `/videos/${file}`,
      videoSrc: `/videos/${file}`,
      videoUrl: '',
      category: category,
      date: date,
      views: views,
      duration: '0:00', // Will be updated when video loads
      featured: isFeatured,
    };
  });
};

const videoWorks = generateVideoWorks();

const categories = [
  'All', 'Acting', 'Direction', 'Editing', 'Ads', 'Content',
];

export default function CreativeWorks() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredId, setHoveredId] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const [modalWork, setModalWork] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [videoDuration, setVideoDuration] = useState({});
  const [mounted, setMounted] = useState(false);
  const modalContainerRef = useRef(null);

  // Handle client-side mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  // Load video durations (client-side only)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    videoWorks.forEach((work) => {
      const video = document.createElement('video');
      video.src = work.videoSrc;
      video.preload = 'metadata';
      video.addEventListener('loadedmetadata', () => {
        const duration = video.duration;
        if (duration && !isNaN(duration)) {
          const minutes = Math.floor(duration / 60);
          const seconds = Math.floor(duration % 60);
          setVideoDuration((prev) => ({
            ...prev,
            [work.id]: `${minutes}:${seconds.toString().padStart(2, '0')}`,
          }));
        }
      });
      video.addEventListener('error', () => {
        // Handle video load errors silently
      });
    });
  }, []);

  // Close modal with ESC (client-side only)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handler = (e) => {
      if (e.key === 'Escape') {
        setModalWork(null);
        setIsFullscreen(false);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  // Handle fullscreen (client-side only)
  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (typeof document === 'undefined' || !modalContainerRef.current) return;
    
    if (!document.fullscreenElement) {
      modalContainerRef.current.requestFullscreen().catch((err) => {
        console.error('Error attempting to enable fullscreen:', err);
      });
    } else {
      document.exitFullscreen();
    }
  };

  const filteredWorks = selectedCategory === 'All'
    ? videoWorks
    : videoWorks.filter((w) => w.category === selectedCategory);

  const displayedWorks = showMore ? filteredWorks : filteredWorks.slice(0, 9);

  /* -------------------------------------------------- */
  /*                RESPONSIVE MODAL                    */
  /* -------------------------------------------------- */
  const VideoModal = ({ work }) => {
    const [videoAspectRatio, setVideoAspectRatio] = useState(9 / 16);
    const [modalLoading, setModalLoading] = useState(true);
    const videoRef = useRef(null);
    const metadataLoadedRef = useRef(false);

    useEffect(() => {
      if (!work) return;
      
      // Reset when work changes
      setVideoAspectRatio(9 / 16);
      setModalLoading(true);
      metadataLoadedRef.current = false;
    }, [work?.id]);

    useEffect(() => {
      if (!videoRef.current || !work || metadataLoadedRef.current) return;
      
      const video = videoRef.current;
      
      const handleLoadedMetadata = () => {
        if (video.videoWidth && video.videoHeight && !metadataLoadedRef.current) {
          metadataLoadedRef.current = true;
          const aspectRatio = video.videoWidth / video.videoHeight;
          setVideoAspectRatio(aspectRatio);
        }
      };
      
      // Only add listener if metadata not already loaded
      if (video.readyState >= 1 && video.videoWidth > 0) {
        handleLoadedMetadata();
      } else {
        video.addEventListener('loadedmetadata', handleLoadedMetadata, { once: true });
      }
      
      return () => {
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    }, [work?.id]);

    const handleCanPlay = useCallback(() => {
      setModalLoading(false);
    }, []);

    const handlePlaying = useCallback(() => {
      setModalLoading(false);
    }, []);

    const handleLoadStart = useCallback(() => {
      setModalLoading(true);
    }, []);

    const handleError = useCallback(() => {
      setModalLoading(false);
    }, []);

    if (!work) return null;

    const isPortrait = videoAspectRatio < 1;

    return (
      <AnimatePresence>
        {modalWork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/98 backdrop-blur-sm p-2 sm:p-4 overflow-y-auto"
            onClick={() => setModalWork(null)}
          >
            {/* Responsive container */}
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              className={`relative w-full ${
                isPortrait 
                  ? 'max-w-[90vw] sm:max-w-[400px] md:max-w-[450px]' 
                  : 'max-w-[95vw] sm:max-w-[85vw] md:max-w-[80vw] lg:max-w-[70vw]'
              } mx-auto`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Control buttons */}
              <div className="absolute -top-12 right-0 flex items-center gap-3 z-10">
                <button
                  onClick={toggleFullscreen}
                  className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-lg"
                  title="Toggle Fullscreen"
                >
                  {isFullscreen ? (
                    <Minimize2 className="h-4 w-4" />
                  ) : (
                    <Maximize2 className="h-4 w-4" />
                  )}
                </button>
                <button
                  onClick={() => setModalWork(null)}
                  className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-lg"
                >
                  <X className="h-5 w-5" />
                  <span className="text-sm hidden sm:inline">Close</span>
                </button>
              </div>

              {/* Video wrapper */}
              <div 
                ref={modalContainerRef}
                className="relative bg-black rounded-xl overflow-hidden shadow-2xl"
              >
                {/* Loading spinner */}
                {modalLoading && (
                  <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/80">
                    <Loader2 className="h-12 w-12 animate-spin text-white" />
                  </div>
                )}

                {/* Video – responsive aspect ratio */}
                <video
                  ref={videoRef}
                  key={work.id}
                  src={work.videoSrc}
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                  onLoadStart={handleLoadStart}
                  onCanPlay={handleCanPlay}
                  onPlaying={handlePlaying}
                  onError={handleError}
                  className={`w-full ${
                    isPortrait 
                      ? 'aspect-[9/16]' 
                      : 'aspect-video'
                  } object-contain`}
                  style={{ maxHeight: '90vh' }}
                >
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Video info - removed title */}
              <div className="mt-4 px-2">
                <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full">
                    {work.category}
                  </span>
                  {videoDuration[work.id] && (
                    <span>{videoDuration[work.id]}</span>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <>
      <section id="work" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Creative Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Click any thumbnail to watch in portrait.
            </p>
          </motion.div>

          {/* Category Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-lg scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Responsive Grid - 2 columns on mobile */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 mb-12">
            {displayedWorks.map((work, idx) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative cursor-pointer"
                onMouseEnter={() => setHoveredId(work.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setModalWork(work)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gray-900 shadow-xl h-full">
                    <div className="relative aspect-[9/16] w-full">
                    {mounted ? (
                      <video
                        src={work.videoSrc}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        muted
                        playsInline
                        preload="metadata"
                        onLoadedMetadata={(e) => {
                          // Set thumbnail frame
                          const video = e.target;
                          if (video.duration > 1) {
                            video.currentTime = 1; // Show frame at 1 second
                          }
                          video.pause(); // Keep it paused
                        }}
                        onError={(e) => {
                          // Fallback if video fails to load
                          console.warn('Video thumbnail failed to load:', work.videoSrc);
                        }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                        <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="px-2.5 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-medium">
                        {work.category}
                      </span>
                      {work.featured && (
                        <span className="px-2.5 py-1 bg-yellow-500/90 backdrop-blur-md rounded-full text-black text-xs font-bold">
                          Featured
                        </span>
                      )}
                    </div>

                    <div className="absolute top-3 right-3 px-2.5 py-1 bg-black/50 backdrop-blur-md rounded-full text-white text-xs font-medium">
                      {videoDuration[work.id] || work.duration}
                    </div>

                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: hoveredId === work.id ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                        <Play className="w-7 h-7 text-gray-900 ml-0.5" fill="currentColor" />
                      </div>
                    </motion.div>

                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-gray-300 text-xs">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {work.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="w-3.5 h-3.5" />
                            {work.views}
                          </span>
                        </div>

                        {work.videoUrl && (
                          <a
                            href={work.videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-yellow-400 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          {filteredWorks.length > 9 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <button
                onClick={() => setShowMore(!showMore)}
                className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full text-lg font-semibold hover:scale-105 transition-transform shadow-lg"
              >
                {showMore ? 'Show Less' : `Load More (${filteredWorks.length - 9} more)`}
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Responsive Modal */}
      <VideoModal work={modalWork} />
    </>
  );
}