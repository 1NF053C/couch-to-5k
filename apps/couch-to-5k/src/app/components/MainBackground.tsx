import { GridLines, Dots, MovingLines } from '@arwes/react';
import { Animator } from '@arwes/react-animator';

export default function MainBackground() {
    return (
        <Animator duration={{ interval: 10 }}>
            <div style={{
                position: 'fixed',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundColor: '#000906',
                backgroundImage: 'radial-gradient(85% 85% at 50% 50%, hsla(240, 100%, 25%, 0.25) 0%, hsla(185, 100%, 25%, 0.12) 50%, hsla(185, 100%, 25%, 0) 100%)'
            }}>
                <MovingLines
                    lineColor='hsla(240, 100%, 75%, 0.05)'
                    distance={30}
                />
                <GridLines
                    lineColor='hsla(240, 100%, 75%, 0.05)'
                    distance={30}
                />
                <Dots
                    color='hsla(240, 100%, 75%, 0.05)'
                    distance={30}
                />
            </div>
        </Animator>
    )
}