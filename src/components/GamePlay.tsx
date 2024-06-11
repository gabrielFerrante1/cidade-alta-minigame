import { useEffect, useState } from "react"
import { useGameStore } from "../stores/gameStore"
import { motion } from 'framer-motion'

export const GamePlay = () => {
    const {
        status,
        time,
        attempts,
        sequence,
        selectedCharacters,
        addSelectedCharacter,
        setSequence,
        setTime,
        setTimeLimit,
        setAttempts,
        setResult,
        stop
    } = useGameStore()

    const [successSound, setSuccessSound] = useState<HTMLAudioElement | null>(null)
    const [errorSound, setErrorSound] = useState<HTMLAudioElement | null>(null)

    const randomCharacter = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
        return characters.charAt(Math.floor(Math.random() * characters.length))
    }

    const generateSequence = () => {
        const quantities = [6, 12]
        const quantity = quantities[Math.floor(Math.random() * quantities.length)]

        const characters: string[] = [];

        // Generating unique random characters
        while (characters.length < quantity) {
            const newChar = randomCharacter();

            if (!characters.includes(newChar)) characters.push(newChar);
        }

        return characters
    }

    useEffect(() => {
        // Load sounds
        setSuccessSound(new Audio('/success-sound.mp3'))
        setErrorSound(new Audio('/error-sound.mp3'))

        // Generate sequence and initialize game
        const randomSequence = generateSequence()
        const time = randomSequence.length * 1.5

        setSequence(randomSequence)
        setTime(time)
        setTimeLimit(time)
    }, [])

    useEffect(() => {
        if (status !== 'playing') return;

        const interval = setInterval(() => {
            setTime(time - 1)

            if (time === 0) {
                // Finish game
                stop()

                // Set result
                setResult({ type: 'lose', attempts: attempts })
            }
        }, 1000)

        return () => clearInterval(interval)
    }, [time, status])

    useEffect(() => {
        if (status !== 'playing') return;

        if (sequence.length <= 6 && attempts > 1 || sequence.length > 6 && attempts > 2) {
            // Finish game
            stop()

            // Set result
            setResult({ type: 'lose', attempts: attempts })
        }

        if (sequence.length > 0 && sequence.length === selectedCharacters.length) {
            // Finish game
            stop()

            // Set result
            setResult({ type: 'win', attempts: attempts })
        }

        const handleKeyPress = (event: KeyboardEvent) => {
            const keyPressed = event.key.toUpperCase()
            const keyPressedIndex = sequence.indexOf(keyPressed)

            if (sequence.includes(keyPressed) && selectedCharacters.length === keyPressedIndex) {
                addSelectedCharacter(keyPressed)

                successSound?.play()
            } else {
                errorSound?.play()

                setAttempts(attempts + 1)
            }
        }

        document.addEventListener('keydown', handleKeyPress)

        return () => document.removeEventListener('keydown', handleKeyPress)
    }, [sequence, selectedCharacters, successSound, attempts, status])


    return (
        <motion.div
            animate={{ opacity: status === 'playing' ? 1 : 0.3 }}
            className="flex flex-col justify-center items-center gap-12 py-8 h-full"
        >
            <p className="text-slate-600 dark:text-slate-300  text-center font-bold">
                Pressione as teclas na sequência correta!
            </p>

            <div className="flex flex-wrap justify-center items-center gap-5 max-w-96">
                {sequence?.map((character, index) => (
                    <div
                        key={index}
                        className={`size-10 border border-slate-400/50 dark:border-slate-600 ${selectedCharacters.includes(character) ? 'bg-green-500' : 'bg-slate-300 dark:bg-slate-700'} rounded-md flex justify-center items-center text-slate-600 dark:text-slate-300 font-bold`}
                    >
                        {character}
                    </div>
                ))}
            </div>
        </motion.div>
    )
}