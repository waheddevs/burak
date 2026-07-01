/* Y-TASK

Shunday function yozing, uni 2'ta array parametri bo'lsin.
Bu function ikkala arrayda ham ishtirok etgan bir xil
qiymatlarni yagona arrayga joylab qaytarsin.

MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]

Yuqoridagi misolda, argument sifatida berilayotgan array'larda
o'xshash sonlar mavjud. Function'ning vazifasi esa ana shu
ikkala array'da ishtirok etgan o'xshash sonlarni yagona arrayga
joylab return qilmoqda.

*/

// Masalaning yechimi:

function findIntersection(a: any[], b: any[]): any[] {
    return a.filter(item => b.includes(item))
        .filter((item, index, self) => self.indexOf(item) === index);
}

console.log(findIntersection([1, 2, 3], [3, 2, 0]));
console.log(findIntersection([4, 5, 6], [6, 7, 5]));










//=========================================================================================================================================

/* X-TASK

Shunday function yozing, uni object va string parametrlari bo'lsin.
Bu function, birinchi object parametri tarkibida, kalit sifatida ikkinchi string parametri
necha marotaba takrorlanganlini sanab qaytarsin.

Eslatma => Nested object'lar ham sanalsin

MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2

Yuqoridagi misolda, birinchi argument object, ikkinchi argument 'model'.
Funktsiya, shu ikkinchi argument 'model', birinchi argument object
tarkibida kalit sifatida 2 marotaba takrorlanganligi uchun 2 soni return qilmoqda

*/

// Masalaning yechimi:

/*
function countOccurrences(obj: Record<string, any>, key: string): number {
    let count = 0;
    for (const k in obj) {
        if (k === key) count++;
        if (typeof obj[k] === 'object' && obj[k] !== null) {
            count += countOccurrences(obj[k], key);
        }
    }
    return count;
}


console.log(countOccurrences({ name: 'Arnold', address: { name: 'Jizzakh', district: { name: 'Qaliya' } } }, 'name'));
console.log(countOccurrences({ type: 'fruit', items: { apple: { type: 'red' }, banana: { subtype: { type: 'tropical' } } } }, 'type'));
*/





//=========================================================================================================================================

/* W-TASK

Shunday function yozing, u o'ziga parametr sifatida
yagona array va number qabul qilsin. Siz tuzgan function
arrayni numberda berilgan uzunlikda kesib bo'laklarga
ajratgan holatida qaytarsin.
MASALAN: chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
return [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]];

Yuqoridagi namunada berilayotgan array ikkinchi parametr 3'ga
asoslanib 3 bo'lakga bo'linib qaytmoqda. Qolgani esa o'z holati qolyapti

*/

// Masalaning yechimi:

/*
function chunkArray(arr: any[], size: number): any[][] {
    const result: any[][] = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(chunkArray(["a", "b", "c", "d", "e"], 2));
*/





//=========================================================================================================================================

/* V-TASK

Shunday function yozing, uni string parametri bo'lsin.
Va bu function stringdagi har bir harfni o'zi bilan
necha marotaba taktorlanganligini ko'rsatuvchi object qaytarsin.

MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}

Yuqoridagi misolda, 'hello' so'zi tarkibida
qatnashgan harflar necha marotaba takrorlangini bilan
object sifatida qaytarilmoqda.

*/

// Masalaning yechimi:

/*
function countChars(str: string): Record<string, number> {
    const counts: Record<string, number> = {};
    for (const char of str) {
        counts[char] = (counts[char] ?? 0) + 1;
    }
    return counts;
}

console.log(countChars('butterfly'))
*/


//=========================================================================================================================================
/* U-TASK

Shunday function tuzing, uni number parametri bo'lsin.
Va bu function berilgan parametrgacha, 0'dan boshlab
oraliqda nechta toq sonlar borligini aniqlab return qilsin.

MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;

Yuqoridagi birinchi misolda, argument sifatida, 9 berilmoqda.
Va 0'dan boshlab sanaganda 9'gacha 4'ta toq son mavjud.
Keyingi namunada ham xuddi shunday xolat takrorlanmoqda.

*/

// Masalaning yechimi:

/*
function sumOdds(num: number): number {
    let count = 0;
    for (let i = 0; i < num; i++) {
        if (i % 2 !== 0) {
            count++;
        }
    }
    return count;
}

console.log(sumOdds(5))
console.log(sumOdds(8))
*/



//=========================================================================================================================================

/* T-TASK

Shunday function tuzing, u sonlardan tashkil topgan 2'ta array qabul qilsin.
Va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin.

MASALAN: mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]); return [0, 3, 4, 4, 6, 30, 31];

Yuqoridagi misolda, ikkala arrayni birlashtirib, tartib raqam bo'yicha tartiblab qaytarmoqda.

*/

// Masalaning yechimi:

/*
function mergeSortedArrays(nums: number[] , numbers: number[]): number[] {
    return [...nums, ...numbers].sort(( a, b ) => a - b );
}

console.log(mergeSortedArrays([ 0, 5, 15, 18 ], [ 1, 2, 6, 10 ]))
*/




//=========================================================================================================================================

/* S-TASK

Shunday function yozing, u numberlardan tashkil topgan list qabul qilsin va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
MASALAN: missing_number([3, 0, 1]) return 2

*/

// Masalaning yechimi:

/*
function missingNumber(nums: number[]): number {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((acc, x) => acc + x, 0);
  return expectedSum - actualSum;
}

console.log(missingNumber([5, 0, 3]));
console.log(missingNumber([0, 4, 7]));
*/




//=========================================================================================================================================

/* R-TASK

Shunday function yozing, u string parametrga ega bolsin. String "1+2" holatda pass qilinganda string ichidagi sonlar yigindisini number holatda qaytarsin.
MASALAN: calculate("1+3") return 4;

*/

// Masalaning yechimi:

/*
function calculate(expression: string): number {
    const [a, b] = expression.split("+").map(Number);
    return a + b;
}

console.log(calculate("4+5"));
console.log(calculate("11+35"));
*/



//=========================================================================================================================================

/* TASK Q:

Shunday function yozing, u 2 ta parametrga ega bo'lib birinchisi object, ikkinchisi string bo'lsin. Agar qabul qilinayotgan ikkinchi string, objectning biror bir propertysiga mos kelsa, 'true', aks holda mos kelmasa 'false' qaytarsin.

MASALAN: hasProperty({ name: "BMW", model: "M3" }, "model"); return true;
Ushbu misolda, 'model' string, objectning propertysiga mos kelganligi uchun 'true' natijani qaytarmoqda

*/

// Masalaning yechimi:

/*
function hasProperty(obj: object, key: string): boolean {
    return key in obj;
}

console.log(hasProperty({ name: "MERS", model: "350" }, "model"));
console.log(hasProperty({ name: "CHEVROLET", model: "COBALT" }, "model"));
console.log(hasProperty({ age: 25, city: "Jizzakh" }, "age"));
*/


//=========================================================================================================================================

/* Project Standarts
- Logging standarts
- Naming standarts
    function, method, variable => CAMEL case      goHome
    class => PASCAL case                          MemberService
    folder, file => KEBAB case
    css => SNAKE case                             buttton_style
- Error handling

*/

/* Requests:

Traditional API
Rest API
GraphQL API

*/

/*

    Tradiditional Frontend development   =>   BSSR  [Admin]   (EJS)
    Modern Frontend development          =>   SPA   [User]    (REACT)

*/

/*

Cookies
    request join
    self destroy
*/

/*
VALIDATIONS

    Frontend validation
    Backend validation
    Database validation

*/