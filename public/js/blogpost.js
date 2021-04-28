const newFormHandler = async (event) => {
    event.preventDefault();

    const content = document.querySelector('#post-content').value.trim();
    // const post_id = document.

    if (content) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                content,
            }),
            headers: {
                "Content-Type": "application/json"
            },
        });

        if (response.ok) {
            console.log(response);
        } else {
            alert("failed to create comment")
        }
    } else {
        alert("You need to write a comment before posting!")
    }
};

document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newFormHandler);