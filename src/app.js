import "./styles.css";

const usernameDom = document.getElementById('username');
const passowrdDom = document.getElementById('password');
const checkDirty = ({ target }) => {
  console.log(target);
  if (target.value.length === 0)
    target.classList.remove('dirty')
  else
    target.classList.add('dirty')
}

usernameDom.addEventListener('keyup', checkDirty);
passowrdDom.addEventListener('keyup', checkDirty);