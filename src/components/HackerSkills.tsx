'use client'

import { motion } from 'framer-motion'

const skills = [
  { name: 'Hacking the Mainframe', level: 100, color: '#00ff41' },
  { name: 'Downloading More RAM', level: 95, color: '#00cc33' },
  { name: 'Social Engineering Moms', level: 87, color: '#00aa22' },
  { name: 'Typing Really Fast', level: 100, color: '#00ff41' },
  { name: 'Looking Cool While Coding', level: 69, color: '#009911' },
  { name: 'Using Inspect Element', level: 100, color: '#00ff41' },
  { name: 'Sigma Grindset', level: 67, color: '#00ff41' },
  { name: 'Wearing Hoodies Indoors', level: 100, color: '#00ff41' },
]

export default function HackerSkills() {
  return (
    <section className="py-32 px-4 bg-gradient-to-b from-transparent via-apple-gray/50 to-transparent">
      <div className="max-w-4xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          Elite <span className="text-sigma-green">Skills</span>
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-16"
        >
          Years of experience watching Mr. Robot and typing fast
        </motion.p>
        
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sigma-green font-mono">{skill.level}%</span>
              </div>
              <div className="h-3 bg-apple-gray rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: skill.color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center text-gray-500 text-sm mt-8"
        >
          * These statistics are 100% accurate and definitely not made up
        </motion.p>
      </div>
    </section>
  )
}
