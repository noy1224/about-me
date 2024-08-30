window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('drawingCanvas');
    const ctx = canvas.getContext('2d');
    let isDrawing = false;

    canvas.addEventListener('mousedown', () => {
        isDrawing = true;
    });

    canvas.addEventListener('mouseup', () => {
        isDrawing = false;
        ctx.beginPath();
    });

    canvas.addEventListener('mousemove', (event) => {
        if (!isDrawing) return;

        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#000000';

        ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    });

    document.getElementById('clearCanvas').addEventListener('click', () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });

    document.getElementById('saveImage').addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL();
        link.download = 'drawing.png';
        link.click();
    });
});