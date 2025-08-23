import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiTwitter, FiMessageSquare, FiLink, FiFileText } from 'react-icons/fi';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 1.2 + (i * 0.1),
        duration: 0.5,
      },
    }),
  };

  // Typing animation text variants
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      }
    },
  };

  const AnimatedText = ({ text, className }) => (
    <motion.div
      variants={textVariants}
      className={className}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          className={`inline-block ${char === ' ' ? 'mr-2' : ''}`}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );

  const resumeLink = "https://drive.google.com/file/d/1-HNqli0m5QTL4WpGQWKPlLPB91TyzNeO/view?usp=sharing";

  return (
    <section className="min-h-screen flex items-center justify-center py-16 sm:py-32 relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -right-1/4 top-1/4 w-96 h-96 bg-highlight/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -left-1/4 bottom-1/4 w-96 h-96 bg-highlight/5 rounded-full blur-3xl"
        />
      </div>

      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-secondary to-primary opacity-50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="mb-8 flex items-center gap-4"
          >
            <motion.a
              href="https://linktr.ee/manishrgowda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-highlight/10 text-highlight rounded-full hover:bg-highlight/20 transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiLink className="text-sm animate-pulse" />
              <span className="text-sm font-mono">All Links</span>
            </motion.a>
            <motion.a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-highlight/10 text-highlight rounded-full hover:bg-highlight/20 transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiFileText className="text-sm animate-pulse" />
              <span className="text-sm font-mono">Resume</span>
            </motion.a>
          </motion.div>

          <AnimatedText
            text="Hi, my name is"
            className="text-highlight font-mono mb-4"
          />

          <AnimatedText
            text="Manish R"
            className="text-4xl sm:text-6xl font-bold mb-4 text-textPrimary"
          />

          <AnimatedText
            text="I build things for Web3"
            className="text-3xl sm:text-5xl font-bold text-textSecondary mb-6 bg-gradient-to-r from-highlight/80 to-highlight/40 bg-clip-text text-transparent whitespace-normal break-words leading-normal sm:leading-normal px-2 sm:px-0"
          />

          <motion.p
            variants={itemVariants}
            className="text-textSecondary max-w-2xl text-lg mb-8 leading-relaxed"
          >
            I'm a blockchain developer and computer science student at PES College of Engineering. 
            Currently, I'm focused on learning and building decentralized applications, exploring 
            Solana development, and working on AI projects with Eliza.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4 justify-center sm:justify-start"
            variants={containerVariants}
          >
            <motion.a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              custom={-1}
              variants={socialVariants}
              className="flex items-center gap-2 px-6 py-3 bg-highlight text-primary rounded-lg hover:bg-highlight/90 transition-all duration-300 font-semibold"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 20px rgba(100, 255, 218, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FiFileText className="text-xl" />
              View Resume
            </motion.a>
            {[
              { icon: FiGithub, link: "https://github.com/manish2889", label: "GitHub" },
              { icon: FiLinkedin, link: "https://www.linkedin.com/in/manishgowda", label: "LinkedIn" },
              { icon: FiMail, link: "mailto:manishr9844@gmail.com", label: "Email" },
              { icon: FiTwitter, link: "https://x.com/0xmanishr", label: "Twitter/X" },
              { icon: FiMessageSquare, link: "https://telegram.dog/Oxmanishr", label: "Telegram" }
            ].map(({ icon: Icon, link, label }, i) => (
              <motion.a
                key={label}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                custom={i}
                variants={socialVariants}
                className="flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-highlight text-highlight rounded-lg hover:bg-highlight/10 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 20px rgba(100, 255, 218, 0.2)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="text-xl" />
                {label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-highlight rounded-full filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000" />
      </motion.div>
    </section>
  );
};

export default Hero; 
