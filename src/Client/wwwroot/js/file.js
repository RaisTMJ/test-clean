﻿window.Download = (options) => {
    const fileUrl = "data:" + options.mimeType + ";base64," + options.byteArray;
    fetch(fileUrl)
        .then(response => response.blob())
        .then(blob => {
            const link = window.document.createElement("a");
            link.href = window.URL.createObjectURL(blob, {type: options.mimeType});
            link.download = options.fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
}
