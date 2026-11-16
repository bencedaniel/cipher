export    const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
export const abcwithSpaces = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ_';

export function caesarEncrypt(str, shift, withUnderLine = false) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toUpperCase();
        if (withUnderLine) {
            let index = abcwithSpaces.indexOf(char);
            let newIndex = (index + shift) % abcwithSpaces.length;
            result += abcwithSpaces[newIndex];
        } else {
            let index = abc.indexOf(char);
            let newIndex = (index + shift) % abc.length;
            result += abc[newIndex];
        }
    }
    return result;
}
export function caesarDecrypt(str, shift, withUnderLine = false){
            let result = '';
            if(withUnderLine){
            [...str].forEach(element => {
               let index = abcwithSpaces.indexOf(element) 
                              let length = abcwithSpaces.length 

               let resultIndex = (index - (shift % length) + length) % length
               result += abcwithSpaces[resultIndex]
            });        }else{
                [...str].forEach(element => {
               let index = abc.indexOf(element)
               let length = abc.length 
               let resultIndex = (index - (shift % length) + length) % length
               result += abc[resultIndex]
            });        
            }
            return result;


}

export function groupReplaceEncrypt(str, mtrx, rowlabels= ['A', 'B', 'C'], columnlabels = ['AA', 'AB','AC', 'BA','BB','BC','CA','CB','CC']){
    let result = '';
    [...str].forEach(element => {
        let found = false
        for (let i = 0; i < mtrx.length; i++) {
            let columnIndex = mtrx[i].indexOf(element)
            if(columnIndex == -1){
                continue
            }else{
                found= true;
                result += rowlabels[i]
                result += columnlabels[columnIndex]

                break
            }
        }
        if(found == false){
            throw new Error("Nem található a mátrixban a karakter!!")
            
        }
    });
    return result;

}
export function groupReplaceDecrypt(str, mtrx, rowlabels= ['A', 'B', 'C'], columnlabels = ['AA', 'AB','AC', 'BA','BB','BC','CA','CB','CC']){
    let result = '';
    for (let i = 0; i < str.length; i+=3) {
        let rowID = rowlabels.indexOf(str[i])
        let columnID = columnlabels.indexOf(str[i+1]+str[i+2])
        if(rowID == -1 || columnID == -1){
            
            throw new Error('Hiba a mátrixban való keresés közben')
            
        }else {
            result += mtrx[rowID][columnID]
        }
        
        
    }
    return result;

}

export function viginereEncryption(str, key, decrypt = false, abc= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"){
    str = str.toUpperCase();
    key = key.toUpperCase();
    let result = ''
    for (let index = 0; index < str.length; index++) {
        let charFromstr = str.charAt(index)
        let charFromKey = key.charAt(index % key.length)
        let p = abc.indexOf(charFromstr)
        let k = abc.indexOf(charFromKey)
        let c = 0
        if(p !== -1 || k !== -1){
            if(decrypt){

                c = (p-k + abc.length) % abc.length
            }else{
                c = (p+k) % abc.length
            }
            result += abc.charAt(c)


        }else{
            throw new Error("Key/Str egy eleme nem tagja az ABC-nek!")
        }
    }
    return result
}




export function shannonKeveroTitkositas(str,shift,prePerm,afterPerm,cycles,spacer,abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ") {
    // Adatok a képről

    let blokkMeret = prePerm.length; // 3

    while (str.length % blokkMeret !== 0) {
        str += spacer;
    }

    console.log("Kiegészített üzenet:", str);

    let blokkokSzama = str.length / blokkMeret;
    let blokkok = [];

    // Blokkainkra bontás
    for (let i = 0; i < str.length; i += blokkMeret) {
        blokkok.push(str.substring(i, i + blokkMeret));
    }

     function permutal(blokk, perm) {
        let ujBlokk = "";
        for (let p of perm) {
            ujBlokk += blokk[p - 1];
        }
        return ujBlokk;
    }

     function eltol(blokk, ertek) {
        let ujBlokk = "";
        for (let i = 0; i < blokk.length; i++) {
            let char = blokk[i];
            let idx = abc.indexOf(char);
            if (idx !== -1) {
                let ujIdx = (idx + ertek) % abc.length;
                ujBlokk += abc[ujIdx];
            } else {
                ujBlokk += char;
            }
        }
        return ujBlokk;
    }

    let eredmenyBlokkok = [...blokkok];

    for (let c = 0; c < cycles; c++) {
        let kovetkezoBlokkok = [];
        for (let b of eredmenyBlokkok) {
            let p1 = permutal(b, prePerm);
            let e = eltol(p1, shift);
            let p2 = permutal(e, afterPerm);
            
            kovetkezoBlokkok.push(p2);
        }
        eredmenyBlokkok = kovetkezoBlokkok;
    }

    let titkosstr = eredmenyBlokkok.join("");
    console.log("Titkos üzenet:", titkosstr);
    return titkosstr;
}

