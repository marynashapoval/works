const data = [
  {
    'folder': true,
    'title': 'Grow',
    'children': [
      {
        'title': 'logo.png'
      },
      {
        'folder': true,
        'title': 'English',
        'children': [
          {
            'title': 'Present_Perfect.txt'
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Soft',
    'children': [
      {
        'folder': true,
        'title': 'NVIDIA',
        'children': null
      },
      {
        'title': 'nvm-setup.exe'
      },
      {
        'title': 'node.exe'
      }
    ]
  },
  {
    'folder': true,
    'title': 'Doc',
    'children': [
      {
        'title': 'project_info.txt'
      }
    ]
  },
  {
    'title': 'credentials.txt'
  }
];

const rootNode = document.getElementById('root');

function subDir(event) {
  console.log(event);
  if (event.srcElement.parentElement.childNodes.length <= 1) { 
    return; 
  }
  let elId = event.srcElement.parentElement.childNodes[1].id;
  console.log(elId);
  if (event.srcElement.parentElement.childNodes[1].style.display === 'none') {
    document.getElementById(elId).style.display = 'block';
  } else {
    document.getElementById(elId).style.display = 'none';
  }
}



const createTree = (arr, hidden, dir) => {
  let containerUl = `<ul id='${dir}' class = 'folder-container' style='display: ${hidden ? 'none' : 'visible'}'>`;
  
  for (let {folder, title, children} of arr) {
    children = Array.isArray(children) ? createTree(children, true, dir + '.' + title) : '';
    folder = folder ? 'folder' : 'file';
    containerUl += `<li class = '${folder}'><div onclick='subDir(event)'>${title}</div>${children}</li>`;
  }
  containerUl += '</ul>'
  return containerUl;
} 

rootNode.insertAdjacentHTML('beforeend', createTree(data, false, 'root'));




