import {useCallback, useState, useEffect} from 'react';
import Button from '@enact/sandstone/Button';
import {fabric} from 'fabric';

const Sketch = () => {
	const [canvas, setCanvas] = useState();
	const bgColor = '#FFFFFF';

	useEffect(() => {
		setCanvas(
			new fabric.Canvas('canvas', {
				height: 780,
				width: 1700,
				backgroundColor: bgColor,
				isDrawingMode: true
			})
		);
	}, []);

	const clearCanvas = useCallback(() => {
		canvas.clear();
		canvas.backgroundColor = bgColor;
	}, [canvas]);

	const downloadCanvas = useCallback(() => {}, []);

	return (
		<div>
			<Button
				icon="trash"
				iconOnly
				backgroundOpacity="opaque"
				onClick={clearCanvas}
			/>
			<Button
				icon="download"
				iconOnly
				backgroundOpacity="opaque"
				onClick={downloadCanvas}
			/>
			<canvas id="canvas" />
		</div>
	);
};

export default Sketch;
