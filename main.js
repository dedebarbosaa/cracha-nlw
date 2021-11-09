const LinksSocialMedia = {
  github: 'dedebarbosaa',
  youtube: 'dedebarbosa',
  facebook: 'dedebarbosa_',
  instagram: 'dedebarbosa_',
  twitter: 'dedebarbosa'
}

function changeSocialMediaLiks (){
    for (let li of socialLinks.children){
      const social = li.getAttribute('class')

      li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
    }
}

function getGitHubProfileInfos(){
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
  .then(response => response.json())
  .then(data=> {
    userBio.textContent = data.bio
    userPhoto.src = data.avatar_url
  })
}
getGitHubProfileInfos()


//comentário