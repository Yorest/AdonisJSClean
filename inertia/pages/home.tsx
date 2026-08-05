import { Alert, Button } from '@heroui/react'
import {ThemeSwitcher} from '~/components/theme-switcher';
import { motion } from 'motion/react'

export function EnterAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
      }}
      style={ball}
    />
  )
}

/**
 * ==============   Styles   ================
 */

const ball = {
  width: 100,
  height: 100,
  backgroundColor: '#5686F5',
  borderRadius: '50%',
}

const MotionButton = motion(Button)

export default function Home() {
  return (
    <>
      <div className="hero">
        <h1>It works — welcome to the power of a full-stack React app</h1>
        <p>
          Powered by Inertia and React, this setup blends server-driven routing with rich
          client-side interactivity — seamless, fast, and cohesive.
        </p>
      </div>

      <div className="cards">
        <a href="https://docs.adonisjs.com/introduction" target="_blank" rel="noreferrer">
          <h3>Official Docs &nbsp;›</h3>
          <p>Comprehensive reference for building with AdonisJS</p>
        </a>

        <a href="https://adocasts.com/" target="_blank" rel="noreferrer">
          <h3>Adocasts &nbsp;›</h3>
          <p>Guided video tutorials for everyday development</p>
        </a>

        <a href="https://discord.gg/vDcEjq6" target="_blank" rel="noreferrer">
          <h3>Discord &nbsp;›</h3>
          <p>Connect with developers building with AdonisJS every day</p>
        </a>
        <EnterAnimation />

        <MotionButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          Animated Button
        </MotionButton>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Alert>
            <Alert.Title>Welcome!</Alert.Title>
          </Alert>
        </motion.div>
        <ThemeSwitcher />
      </div>
    </>
  )
}
