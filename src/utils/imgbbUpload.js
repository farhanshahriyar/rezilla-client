export default async function uploadImgToImgBB(imageFile) {
    const formData = new FormData();
    formData.append('image', imageFile);
    const response = await fetch(`https://api.imgbb.com/1/upload?key=13018994aaa2a5c647e68995fe06fd81`, {
        method: 'POST',
        body: formData
    });

    const data = await response.json();


    if (data.success) {
        return data.data.url;
    } else {
        throw new Error('Failed to upload image');
    }
}