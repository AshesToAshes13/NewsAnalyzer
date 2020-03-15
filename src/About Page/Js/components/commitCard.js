export class CommitCard {
    constructor(commitList) {
        this.commitList = commitList;
    }
    setUpCommit(avatar, userName, email, date, message) {
        const githubCommit = document.createElement('div');
        const commitDate = document.createElement('h2');
        const commitUser = document.createElement('div');
        const userAvatar = document.createElement('img');
        const userData = document.createElement('div');
        const username = document.createElement('h3');
        const userEmail = document.createElement('p');
        const commitMessage = document.createElement('p')

        githubCommit.classList.add('github__commit');
        commitDate.classList.add('commit__date');
        commitUser.classList.add('commit__user');
        userAvatar.classList.add('user__avatar');
        userData.classList.add('user__data');
        username.classList.add('user__name');
        userEmail.classList.add('user__email');
        commitMessage.classList.add('commit__coment');

        githubCommit.appendChild(commitDate);
        githubCommit.appendChild(commitUser);
        commitUser.appendChild(userAvatar);
        commitUser.appendChild(userData);
        userData.appendChild(username);
        userData.appendChild(userEmail);
        githubCommit.appendChild(commitMessage);
        this.commitList.appendChild(githubCommit);

        commitDate.textContent = date;
        userAvatar.src = avatar;
        username.textContent = userName;
        userEmail.textContent = email;
        commitMessage.textContent = message;



    }
}