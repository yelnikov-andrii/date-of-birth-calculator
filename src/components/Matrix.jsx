import React, { useEffect, useState } from 'react';

function Matrix({ value }) {
    const [digits, setDigits] = useState([]);
    const [leakDigits, setLeakDigits] = useState([]);
    const list = {
        1: 'Цифра один символизирует начало, лидерство и независимость. Это число первого шага, нового пути.',
        2: 'Цифра два символизирует сотрудничество, баланс и гармонию. Это число партнерства и единства.',
        3: 'Цифра три символизирует творчество, самовыражение и радость. Это число вдохновения и оптимизма.',
        4: 'Цифра четыре символизирует стабильность, порядок и практичность. Это число структуры и надежности.',
        5: 'Цифра пять символизирует свободу, приключение и изменение. Это число разнообразия и движения вперед.',
        6: 'Цифра шесть символизирует заботу, ответственность и гармонию. Это число любви и домашнего уюта.',
        7: 'Цифра семь символизирует духовность, анализ и интроспекцию. Это число мудрости и глубокого понимания.',
        8: 'Цифра восемь символизирует силу, власть и материальный успех. Это число достижения и амбиций.',
        9: 'Цифра девять символизирует завершение, гуманитаризм и универсальную любовь. Это число альтруизма и служения другим.'
    };


    console.log(value);

    useEffect(() => {
        if (value) {
            const arr = [...value?.$y?.toString().split(''), ...(value?.$M + 1)?.toString().split(''), ...value?.$D?.toString().split('')];
            if (arr?.length === 8) {
                setDigits(arr);
            }
        }
    }, [value]);

    const digitCount = digits.reduce((acc, digit) => {
        acc[digit] = (acc[digit] || 0) + 1;
        return acc;
    }, {});

    useEffect(() => {
        if (digits?.length) {
            const leakDigits = [];

            for (let i = 1; i <= 9; i++) {
                if (!digits.includes(i.toString())) {
                    leakDigits.push(i);
                }
            }

            if (leakDigits?.length) {
                setLeakDigits(leakDigits);
            }
        }
    }, [digits]);

    return (
        <>
            <h4>
                List of characteristics:
            </h4>
            <ul>
                {Object.entries(list).map(item => (
                    <li>
                        {item[1]}
                    </li>
                ))}
            </ul>
            <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column-reverse', maxWidth: '650px', maxHeight: '650px', margin: '40px 0 0 0' }}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
                    <div key={index} style={{ width: '200px', padding: '20px', boxSizing: 'border-box', height: '200px', border: '2px solid black', marginRight: '10px', position: 'relative', marginBottom: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ fontWeight: 600, fontSize: '22px' }}>
                                {(digitCount[index] || 0) > 0 && Array(digitCount[index]).fill(index).join(', ')}
                            </div>
                            <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                                <span style={{ border: '1px solid black', borderRadius: '50%', display: 'flex', width: '30px', height: '30px', justifyContent: 'center', alignItems: 'center' }}>
                                    {index}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                {leakDigits?.length && (
                    <div>
                        <h4>Leak of:</h4>
                        <ul>
                            {leakDigits.map(digit => (
                                <li key={digit}>
                                    {list[digit]}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

            </div>
        </>
    );
}

export default Matrix;

