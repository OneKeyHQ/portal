import { FC, useEffect, useRef } from 'react';

import { Player } from './Player';

interface CanvasPlayerNextProps {
  progress: number;
  frames: string[][];
  width: number;
  height: number;
  onTotalProgressChange?: (progress: number) => void;
}

export const CanvasPlayerNext: FC<CanvasPlayerNextProps> = (props) => {
  const { progress = 0, frames, width, height, onTotalProgressChange } = props;
  const player = useRef<Player | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas && frames && !player.current) {
      player.current = new Player({
        element: canvas,
        width,
        height,
      });

      player.current.resize(width, height);
      player.current.setFrameGroups(frames);
      player.current.setProgress(progress);

      const totalProgress = player.current.getTotalProgress();

      onTotalProgressChange?.(totalProgress);
    }
  }, [frames, width, height, progress, onTotalProgressChange]);

  useEffect(() => {
    if (player.current) {
      player.current.setProgress(progress);

      const state = player.current.getProgressState(progress);

      console.log(state);
    }
  }, [progress]);

  useEffect(() => {
    if (player.current) {
      player.current.resize(width, height);
    }
  }, [width, height]);

  return <canvas ref={canvasRef} />;
};
