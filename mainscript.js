const generate = document.getElementById('generate');

const $generate = (
    len,
    char,
    cchar, 
    num,
    sym
) => {

    const $char = 'qwertyuiopasdfghjklzxcvbnm';
    const $cchar = $char.toUpperCase();
    let $num = '';
    for(let digit = 0; digit < 10; digit++) {$num += digit;}
    const $sym = '!"£$%&/()=?^*_:;,.-@#[]';

    let password = '';
    let allowed = '';

    allowed += char ? $char : '';
    allowed += cchar ? $cchar : '';
    allowed += num ? $num : '';
    allowed += sym ? $sym : '';

    for (let i = 0; i < len; i++) {
        let ranindex = Math.floor(Math.random() * allowed.length);
        password += allowed[ranindex]
    }
    return password;
}
generate.onclick = () => {
    const lengthPassword = document.getElementById('lenghtnum').value;
    const $allowChars = document.getElementById('allowChrs');
    const $allowCchars = document.getElementById('allowCach');
    const $allowNums = document.getElementById('allownums');
    const $allowSyms = document.getElementById('allowsym');
    const $result = document.getElementById('h22');

    let chars, cchars, nums, syms;

    chars = $allowChars.checked;
    cchars = $allowCchars.checked;
    nums = $allowNums.checked;
    syms = $allowSyms.checked;

    if (lengthPassword == null || lengthPassword == "") {
        window.alert('Password must be at least 1 character long')
    }  
    if (!chars && !cchars && !nums && !syms) {
        window.alert('Password must contain at least a letter, a capital letter, a number or a symbol')
    } else if (
        chars || cchars || nums || syms && lengthPassword
    ) 
    {
        let result = $generate(lengthPassword, chars, cchars, nums, syms);
        $result.textContent = `Your generated password is: ${result}`;
    }
    
}
