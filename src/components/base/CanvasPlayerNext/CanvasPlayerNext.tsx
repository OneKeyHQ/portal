import { FC, useEffect, useRef } from 'react';

import {
  Player,
  PlayerConfig,
  ProgressStateItem,
  ProgressStates,
} from './Player';

interface CanvasPlayerNextProps {
  progress: number;
  frames: string[][];
  backgroundColor: string;
  width: number;
  height: number;
  onTotalProgressChange?: (
    progress: number,
    currentState: ProgressStateItem | undefined,
    progressStates: ProgressStates,
  ) => void;
  onUpdate?: PlayerConfig['onUpdate'];
}

export const CanvasPlayerNext: FC<CanvasPlayerNextProps> = (props) => {
  const {
    progress = 0,
    frames,
    width,
    height,
    onTotalProgressChange,
    onUpdate = () => {},
    backgroundColor,
  } = props;
  const player = useRef<Player | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas && frames && !player.current) {
      player.current = new Player({
        element: canvas,
        width,
        height,
        backgroundColor,
        onUpdate,
      });

      player.current.setFrameGroups(frames);
      player.current.setProgress(progress);
      player.current.resize(width, height);

      const totalProgress = player.current.getTotalProgress();
      const currentState = player.current.getProgressState(progress);
      const { progressStates } = player.current;

      onTotalProgressChange?.(totalProgress, currentState, progressStates);
    }
  }, [
    frames,
    width,
    height,
    progress,
    onTotalProgressChange,
    backgroundColor,
    onUpdate,
  ]);

  useEffect(() => {
    if (player.current) {
      player.current.setProgress(progress);

      const totalProgress = player.current.getTotalProgress();
      const currentState = player.current.getProgressState(progress);
      const { progressStates } = player.current;

      onTotalProgressChange?.(totalProgress, currentState, progressStates);
    }
  }, [onTotalProgressChange, progress]);

  useEffect(() => {
    if (player.current) {
      player.current.resize(width, height);
    }
  }, [width, height]);

  return <canvas ref={canvasRef} />;
};
