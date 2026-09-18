/**
 * TÁBOA BRASIL - UTILITÁRIO DE OTIMIZAÇÃO DE IMAGENS
 * Redimensiona e comprime imagens da câmera/galeria do smartphone diretamente no navegador.
 */

const ImageUtils = {
  /**
   * Converte e redimensiona um File de imagem para DataURL base64 otimizado
   * @param {File} file - Arquivo selecionado no input
   * @param {Object} options - Configurações de dimensão e qualidade
   * @returns {Promise<string>} DataURL da imagem otimizada
   */
  compressImage(file, options = {}) {
    const maxWidth = options.maxWidth || 1200;
    const maxHeight = options.maxHeight || 1200;
    const quality = options.quality || 0.85;

    return new Promise((resolve, reject) => {
      if (!file || !file.type.startsWith('image/')) {
        return reject(new Error('O arquivo selecionado não é uma imagem válida.'));
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          let width = img.width;
          let height = img.height;

          // Calcula proporção para manter o aspect ratio
          if (width > height) {
            if (width > maxWidth) {
              height = Math.round((height * maxWidth) / width);
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width = Math.round((width * maxHeight) / height);
              height = maxHeight;
            }
          }

          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext('2d');
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = 'high';
          ctx.drawImage(img, 0, 0, width, height);

          // Gera imagem em JPEG otimizado
          const compressedDataUrl = canvas.toDataURL('image/jpeg', quality);
          resolve(compressedDataUrl);
        };
        img.onerror = () => reject(new Error('Erro ao processar imagem.'));
        img.src = e.target.result;
      };
      reader.onerror = () => reject(new Error('Erro ao ler arquivo de imagem.'));
      reader.readAsDataURL(file);
    });
  }
};

window.ImageUtils = ImageUtils;
