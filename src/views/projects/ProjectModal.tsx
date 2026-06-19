import { AnimatePresence, motion } from "framer-motion";
import { Dialog } from "radix-ui";
import { ExternalLink, X } from "lucide-react";
import { SiGithub } from "react-icons/si";
import type { Project } from "../../data/project.data";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  return (
    <>
      <Dialog.Root open={!!project} onOpenChange={(o) => !o && onClose()}>
        <AnimatePresence>
          {project && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={onClose}
            >
              <motion.div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-linear-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/20 p-6 md:p-8"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.button
                  className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                >
                  <X size={24} />
                </motion.button>

                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {project.title}
                    </h2>
                    <div className="flex items-center gap-4 text-gray-400">
                      <span className="text-sm">{project.year}</span>
                      <div className="w-1 h-1 rounded-full bg-gray-600" />
                      <p className="text-sm">
                        {project.tech.length} Technologies
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed">
                    {project.description}
                  </p>

                  <div>
                    <h3 className="text-white font-semibold mb-3">
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-sm border border-indigo-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-white font-semibold mb-3">
                      Challenges
                    </h3>
                    <ul className="space-y-2">
                      {project.challenges.map((challenge, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <span className="text-indigo-400 mt-1">•</span>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-white font-semibold mb-3">Solutions</h3>
                    <ul className="space-y-2">
                      {project.solutions.map((solution, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <span className="text-purple-400 mt-1">•</span>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-white font-semibold mb-3">Learnings</h3>
                    <ul className="space-y-2">
                      {project.learnings.map((learnings, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <span className="text-green-400 mt-1">✓</span>
                          {learnings}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-white/10">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-3 rounded-lg bg-linear-to-r from-indigo-500 to-purple-500 text-white font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-indigo-500/50 transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink size={18} />
                      View Project
                    </motion.a>
                    <motion.a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-3 rounded-lg border border-gray-400 text-white font-medium flex items-center justify-center gap-2 hover:border-gray-300 hover:bg-white/5 transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <SiGithub size={18} />
                      View Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Dialog.Root>
    </>
  );
};
