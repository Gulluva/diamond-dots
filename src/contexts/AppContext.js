import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext();

export function useApp() {
    return useContext(AppContext)
}

const AppContextProvider = (props) => {
    const numberOfDots = 9;
    const [numDots, setNumDots] = useState(numberOfDots);
    const [puzzleDigits, setPuzzleDigits] = useState(generateZeros(numberOfDots));
    const [staticDigits, setStaticDigits] = useState(generateRandomString(numberOfDots));

    const colorMap = {
        0: 'black',
        1: 'white',
        2: 'red',
        3: 'green',
        4: 'yellow',
        5: 'blue',
        6: 'orange',
        7: 'purple',
        8: 'pink',
        9: 'brown'
        // ... Add colors for other numbers
      };

      function generateRandomString(numDigits) {
        const partitions = getPartitions(numDigits);
        const chosenPartition = partitions[Math.floor(Math.random() * partitions.length)];
        
        let stringArray = [];
        for (let num of chosenPartition) {
            for (let i = 0; i < num; i++) {
                stringArray.push(num);
            }
        }
      
        // Shuffle the array
        for (let i = stringArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [stringArray[i], stringArray[j]] = [stringArray[j], stringArray[i]];
        }
      
        return stringArray.join("");
      }
      
      function getPartitions(targetSum) {
        function backtrack(remain, current, start, result) {
            if (remain === 0) {
                result.push([...current]);
                return;
            }
            for (let i = start; i <= remain && i <= 9; i++) {
                current.push(i);
                backtrack(remain - i, current, i, result);
                current.pop();
            }
        }
      
        const result = [];
        backtrack(targetSum, [], 1, result);
        return result.filter(part => part.every((num, idx, arr) => arr.indexOf(num) === idx));
      }
      
      
      function digString2Dots (digstring, posBase, multiplier, colArray) {
        const digstringArray = digstring.split('');
        console.log({digstringArray})
        const returnArray = [];
        for (let index = 0; index < digstringArray.length; index++) {
          const element = {x: multiplier*posBase[index].x, y: multiplier*posBase[index].y, colour: colArray[digstringArray[index]]};
          returnArray.push(element);
          
        }
        return returnArray;
        
      }
      const positionBase = [[],[],[],[],[],[],
        [ // 6
        { x: 10, y: 3},
        { x: 8, y: 6},
        { x: 12, y: 6},
        { x: 6, y: 9},
        { x: 10, y: 9},
        { x: 14, y: 9}
        ],
        [ // 7
          { x: 8, y: 6},
        { x: 12, y: 6},
        { x: 6, y: 9},
        { x: 10, y: 9},
        { x: 14, y: 9},
        { x: 8, y: 12},
        { x: 12, y: 12}
      ],
        [ // 8
          { x: 8, y: 6},
        { x: 12, y: 6},
        { x: 6, y: 9},
        { x: 10, y: 9},
        { x: 14, y: 9},
        { x: 8, y: 12},
        { x: 12, y: 12},
        { x: 10, y: 15}],
      
        [ // 9
          { x: 10, y: 3},
        { x: 8, y: 6},
        { x: 12, y: 6},
        { x: 6, y: 9},
        { x: 10, y: 9},
        { x: 14, y: 9},
        { x: 8, y: 12},
        { x: 12, y: 12},
        { x: 10, y: 15}
      ],
      [ // 10
        { x: 10, y: 3},
        { x: 8, y: 6},
        { x: 12, y: 6},
        { x: 6, y: 9},
        { x: 10, y: 9},
        { x: 14, y: 9},
        { x: 4, y: 12},
        { x: 8, y: 12},
        { x: 12, y: 12},
        { x: 16, y: 12}
      ]
      ];


    function generateZeros(num) {
        let zeros = '';
        for (let i = 0; i < num; i++) {
            zeros += '0';
        }
        return zeros;
    }

    const contextObject = {
        numDots, setNumDots,
        puzzleDigits, setPuzzleDigits,
        staticDigits, setStaticDigits,
        colorMap, positionBase, digString2Dots, generateRandomString    
    };

    return (
        <AppContext.Provider value={contextObject}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
