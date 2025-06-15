export function showNotification(message, type) {
	const notification = document.querySelector('.notification');
	const messageElement = notification.querySelector('.message');

	messageElement.innerHTML = `
        <span style="font-size: 1.5rem;" class="material-symbols-rounded">${type}</span>
        <span>${message}</span>
    `;

	if (type === 'error') {
		notification.style.setProperty('--notification-color', 'red');
	} else {
		notification.style.setProperty('--notification-color', '#1aa91a');
	}

	notification.classList.add('show-notification');

	setTimeout(() => {
		notification.classList.remove('show-notification');
	}, 4000);
}

export async function getImages() {
	try {
		const imageFiles = await fetch('/api/uploads');
		const data = imageFiles.json();
		return data;
	} catch (error) {
		console.error(error);
		showNotification(
			'Failed To Get The Images. Please, Try Again',
			'error',
		);
	}
}
