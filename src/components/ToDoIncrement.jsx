// import React from "react";

// function ToDoIncrement () {
// //mendeklarasikan increment

// let increment = 0;
//     // menampilkan
//     return(
//         <>
//         <div>{increment}</div>
//             <div>
//             <button>Nambah</button>
//             </div>
//         </>
//     );
// };

// export default ToDoIncrement

// import React from "react";

// let increment =0;

// function ToDoIncrement(){
//     //kita deklarasikan fungsi ketika tombol ditekan
//     function buttonNambahClickHandler() {
//         console.log(increment);
//         increment = increment + 1;
//         }
        
//         return (
//             <>
//                 <span style={{marginRight: '0.25em'}}>{increment}</span>
//                 <span>
//                     {/* Disini kita deklarasi onclick untuk menambahkan event ketika tombol diclick*/}
//                     <button onClick={buttonNambahClickHandler}>Nambah</button>
//                 </span>
//             </>
//         );
// }

// export default ToDoIncrement





//disini jadinya harus import useState
import React, {useState} from "react";


function ToDoIncrement(){
  //sekarang kita menggunakan useState untuk deklarasi increment
  //pada saat deklarasi, kita menggunakan array
  //indeks 0 adalah nama variabel yang ingin dideklarasikan
  //indeks 1 adalah nama fungsi yang digunakan untuk memutasi (mengganti) variabel
    
    const[increment, setIncrement]= useState(0);

    function buttonNambahClickHandler() {
       console.log(increment);
       //disini karena kita ketahui bahwa setIncrement adalah fungsi 
       //untuk memutasi (mengubah) si increment menjadi nilai baru
        setIncrement (increment + 1);
        }
        
        return (
            <>
                <span style={{marginRight: '0.25em'}}>{increment}</span>
                <span>
                    <button onClick={buttonNambahClickHandler}>Nambah</button>
                </span>
            </>
        );
}

export default ToDoIncrement
