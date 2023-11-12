export default function Share() {
  async function onShare() {
    const blob = await fetch(
      `/api/capture?url=http://localhost:3000/&width=1600&height=1200&disableAnimations=true`
    ).then((res) => res.blob());

    // Panggil fungsi untuk mengunduh file
    downloadFile(blob);

    const filesArray: File[] = [
      new File([blob], `screenshot.png`, {
        type: blob.type,
      }),
    ];

    const shareData = {
      files: filesArray,
      title: `This is the screenshot`,
    };

    // Bagian berikut masih tetap sama
    navigator.share(shareData as any).catch((e) => Error(e));
  }

  // Fungsi untuk mengunduh file
  function downloadFile(blob: Blob) {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'screenshot.png';

    // Simulasikan klik pada elemen anchor untuk mengunduh file
    a.click();

    // Hapus elemen anchor setelah proses unduhan
    window.URL.revokeObjectURL(url);
  }

  return (
    <>
      <button
        className="text-white bg-[#3461FF] rounded-xl p-2 xl:py-2 xl:px-3 xl:text-lg lg:text-xs lg:p-2 md:p-1 md:text-xs md:rounded-1 md:mx-0 sm:text-xs"
        onClick={onShare}
      >
        Share
      </button>
    </>
  );
}
