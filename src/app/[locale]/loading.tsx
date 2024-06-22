import styles from './loading.module.css';

export default function Loading() {
    return (
        <main className={`text-center h-screen ${styles.bodyDesign}`}>
            <div className={`${styles.mainDesign}`}>
                <div className={`${styles.tetris}`}>
                    <div className={`${styles.tetris__block} ${styles.tetris__block__1}`}>
                        <div className={styles.tetris__block_cell} />
                        <div className={styles.tetris__block_cell} />
                        <div className={styles.tetris__block_cell} />
                        <div className={styles.tetris__block_cell} />
                    </div>
                    <div className={`${styles.tetris__block} ${styles.tetris__block__2}`}>
                        <div className={styles.tetris__block_cell} />
                        <div className={styles.tetris__block_cell} />
                        <div className={styles.tetris__block_cell} />
                        <div className={styles.tetris__block_cell} />
                    </div>
                    <div className={`${styles.tetris__block} ${styles.tetris__block__3}`}>
                        <div className={styles.tetris__block_cell} />
                        <div className={styles.tetris__block_cell} />
                        <div className={styles.tetris__block_cell} />
                        <div className={styles.tetris__block_cell} />
                    </div>
                    <div className={`${styles.tetris__block} ${styles.tetris__block__4}`}>
                        <div className={styles.tetris__block_cell} />
                        <div className={styles.tetris__block_cell} />
                        <div className={styles.tetris__block_cell} />
                        <div className={styles.tetris__block_cell} />
                    </div>
                    <div className={`${styles.tetris__block} ${styles.tetris__block__5}`}>
                        <div className={styles.tetris__block_cell} />
                        <div className={styles.tetris__block_cell} />
                        <div className={styles.tetris__block_cell} />
                        <div className={styles.tetris__block_cell} />
                    </div>
                    <div className={`${styles.tetris__block} ${styles.tetris__block__6}`}>
                        <div className={styles.tetris__block_cell} />
                        <div className={styles.tetris__block_cell} />
                        <div className={styles.tetris__block_cell} />
                        <div className={styles.tetris__block_cell} />
                    </div>
                    <div className={`${styles.tetris__block} ${styles.tetris__block__7}`}>
                        <div className={styles.tetris__block_cell} />
                        <div className={styles.tetris__block_cell} />
                        <div className={styles.tetris__block_cell} />
                        <div className={styles.tetris__block_cell} />
                    </div>
                    <div className={`${styles.tetris__block} ${styles.tetris__block__8}`}>
                        <div className={styles.tetris__block_cell} />
                        <div className={styles.tetris__block_cell} />
                        <div className={styles.tetris__block_cell} />
                        <div className={styles.tetris__block_cell} />
                    </div>
                    <div className={`${styles.tetris__block} ${styles.tetris__block__9}`}>
                        <div className={styles.tetris__block_cell} />
                        <div className={styles.tetris__block_cell} />
                        <div className={styles.tetris__block_cell} />
                        <div className={styles.tetris__block_cell} />
                    </div>
                    <div className={`${styles.tetris__block} ${styles.tetris__block__10}`}>
                        <div className={styles.tetris__block_cell} />
                        <div className={styles.tetris__block_cell} />
                        <div className={styles.tetris__block_cell} />
                        <div className={styles.tetris__block_cell} />
                    </div>
                </div>
            </div>
        </main >
    );
}