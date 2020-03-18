export class CommitCard {
    constructor(commitList) {
        this.commitList = commitList;
    }
    setUpCommit() {
        const githubCommit = document.createElement('div');
        const _commitDate = document.createElement('h2');
        const _commitUser = document.createElement('div');
        const _userAvatar = document.createElement('img');
        const _userData = document.createElement('div');
        const _username = document.createElement('h3');
        const _userEmail = document.createElement('p');
        const _commitMessage = document.createElement('p')

        githubCommit.classList.add('github__commit');
        _commitDate.classList.add('commit__date');
        _commitUser.classList.add('commit__user');
        _userAvatar.classList.add('user__avatar');
        _userData.classList.add('user__data');
        _username.classList.add('user__name');
        _userEmail.classList.add('user__email');
        _commitMessage.classList.add('commit__coment');

        githubCommit.appendChild(_commitDate);
        githubCommit.appendChild(_commitUser);
        _commitUser.appendChild(_userAvatar);
        _commitUser.appendChild(_userData);
        _userData.appendChild(_username);
        _userData.appendChild(_userEmail);
        githubCommit.appendChild(_commitMessage);

        return githubCommit

    }
}