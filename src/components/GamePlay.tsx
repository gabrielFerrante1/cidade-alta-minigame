import { useRanking } from "@/hooks/useRanking"
import { useGameStore } from "@/stores/gameStore"
import { motion } from 'framer-motion'
import { useCallback, useEffect, useState } from "react"

export const GamePlay = () => {
    const {
        status,
        time,
        timeLimit,
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

    const { setRankings } = useRanking()

    const [successSound, setSuccessSound] = useState<HTMLAudioElement | null>(null)
    const [errorSound, setErrorSound] = useState<HTMLAudioElement | null>(null)

    const generateSequence = useCallback(() => {
        const randomCharacter = () => {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
            return characters.charAt(Math.floor(Math.random() * characters.length))
        }

        const quantities = [6, 12]
        const quantity = quantities[Math.floor(Math.random() * quantities.length)]

        const characters: string[] = [];

        // Generating unique random characters
        while (characters.length < quantity) {
            const newChar = randomCharacter();

            if (!characters.includes(newChar)) characters.push(newChar);
        }

        return characters
    }, [])

    const handleKeyPress = useCallback((event: KeyboardEvent) => {
        const keyPressed = event.key.toUpperCase()
        const keyPressedIndex = sequence.indexOf(keyPressed)

        if (keyPressed === 'F5') return;

        // Check if selected character is correct
        if (sequence.includes(keyPressed) && selectedCharacters.length === keyPressedIndex) {
            addSelectedCharacter(keyPressed)

            successSound?.play()
        } else {
            errorSound?.play()

            setAttempts(attempts + 1)
        }
    }, [sequence, selectedCharacters, successSound, errorSound, attempts, addSelectedCharacter, setAttempts])

    useEffect(() => {
        // Load sounds
        setSuccessSound(new Audio('/success-sound.mp3'))
        setErrorSound(new Audio('/error-sound.mp3'))
    }, [])

    useEffect(() => {
        if (sequence.length !== 0) return;

        // Generate sequence and initialize game
        const randomSequence = generateSequence()
        const gameTime = randomSequence.length * 1

        setSequence(randomSequence)
        setTime(gameTime)
        setTimeLimit(gameTime)
    }, [sequence, setSequence, setTime, setTimeLimit, generateSequence])

    useEffect(() => {
        if (status !== 'playing') return;

        const interval = setInterval(() => {
            setTime(time - 1)

            if (time - 1 === 0) {
                // Finish game
                stop()

                // Set result
                setResult('lose')
            }
        }, 1000)

        return () => clearInterval(interval)
    }, [time, status, stop, setResult, setTime])

    useEffect(() => {
        if (status !== 'playing') return;

        if (sequence.length <= 6 && attempts > 1 || sequence.length > 6 && attempts > 2) {
            // Finish game
            stop()
            setResult('lose')
        }

        if (sequence.length > 0 && sequence.length === selectedCharacters.length) {
            // Finish game
            stop()

            setResult('win')
            setRankings({
                time: timeLimit - time,
                attempts,
                date: new Date().toLocaleDateString()
            })
        }
    }, [sequence, selectedCharacters, attempts, status, time, timeLimit, stop, setResult, setRankings])

    useEffect(() => {
        if (status !== 'playing') return;

        document.addEventListener('keydown', handleKeyPress)

        return () => document.removeEventListener('keydown', handleKeyPress)
    }, [status, handleKeyPress])

    return (
        <motion.div
            animate={{ opacity: status === 'playing' ? 1 : 0.3 }}
            className="flex flex-col justify-center items-center gap-12 py-8 h-full"
        >
            <p className="text-slate-600 dark:text-slate-300 text-center font-bold">
                Pressione as teclas na sequência correta!
            </p>

            <div className="flex flex-wrap justify-center items-center gap-5 max-w-96">
                {sequence?.map((character, index) => (
                    <div
                        key={index}
                        className={`size-10 ${sequence.indexOf(character) === selectedCharacters.length ? 'border-amber-400 border-2' : 'border border-slate-400/50 dark:border-slate-600'} text-slate-600 dark:text-slate-300 ${selectedCharacters.indexOf(character) === index ? 'bg-green-500' : 'bg-slate-300 dark:bg-slate-700'} rounded-md flex justify-center items-center font-bold`}
                    >
                        {character}
                    </div>
                ))}
            </div>
        </motion.div>
    )
}