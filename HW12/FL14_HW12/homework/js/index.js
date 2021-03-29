let	countPage1 = localStorage.getItem('Page1');
let countPage2 = localStorage.getItem('Page2');
let countPage3 = localStorage.getItem('Page3');
	
  if (countPage1 === null || isNaN(countPage1)) {
    countPage1 = 0;
  }
  if (countPage2 === null || isNaN(countPage2)) {
    countPage2 = 0;
  }
  if (countPage3 === null || isNaN(countPage3)) {
    countPage3 = 0;
  }

const list = document.createElement('ul');
list.className = 'count-list';

function visitLink(path) {
  switch (path) {
    case 'Page1':
          countPage1++;
          localStorage.setItem(path, countPage1);
          break;
    
    case 'Page2':
          countPage2++;
          localStorage.setItem(path, countPage2);
          break;
    
    case 'Page3':
          countPage3++;
          localStorage.setItem(path, countPage3);
          break;
  }
}

function viewResults() {
  const content = document.getElementById('content');
  if (content.contains(list)) {
    list.innerHTML = '';
    content.removeChild(list);
	}

  const page1 = document.createElement('li');
  page1.innerText = `You visited Page1 ${countPage1} time(s)`;
	
  const page2 = document.createElement('li');
	page2.innerText = `You visited Page2 ${countPage2} time(s)`;
	
  const page3 = document.createElement('li');
	page3.innerText = `You visited Page3 ${countPage3} time(s)`;
	
  list.append(page1, page2, page3);
	content.append(list);
}