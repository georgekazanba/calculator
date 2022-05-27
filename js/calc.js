var text = '';
var result = 0;
var arr = [];
$(document).ready(function() {
    $("button").click(function() {
        while (true){
            console.log(arr);
            if (arr[1] === 0){arr.splice(1,1);}
            //если передаётся не знак оператора или "Сброс", то в переменную числа добавляется цифра и выводится число
            if (
                $( this ).text() != '+'
                && $( this ).text() != '-'
                && $( this ).text() != '/'
                && $( this ).text() != '*'
                && $( this ).text() != '='
                && $( this ).text() != 'Сброс'
            ){text += $( this ).text(); $( "#vyvod" ).val( text );}
            else
            {
                switch ($( this ).text())
                {
                    //при передачи "Сброса" сбрасывается число 'text', конечное значение и массив с числами и операторами
                    //выводится 'text', который мы как раз сбросили, так что держите пустоту
                    case 'Сброс':
                        text = '';
                        result = 0;
                        arr = [];
                        $( "#vyvod" ).val( text );
                        break;
                    case '=':
                        arr.push(Number(text));
                        console.log(arr);
                        result += arr[0];
                        if (arr.length == 4 && arr[1] == 0){arr.splice(1, 1);}
                        for (i = 1; i < arr.length; i +=2)
                        {
                            console.log(arr[i - 1] + " / " + arr[i + 1] + ' / ' + result)
                            switch (arr[i])
                            {
                                case '+':
                                    result += arr[i+1];
                                    break;
                                case '-':
                                    result -= arr[i+1];
                                    break;
                                case '*':
                                    result *= arr[i+1];
                                    break;
                                case '/':
                                    result /= arr[i+1];
                                    break;
                                default:
                                    result = arr[i];
                                    break;
                            }
                        }
                        text = '';
                        arr = [];
                        arr[0] = result;
                        if (result != Infinity){$( "#vyvod" ).val( result )}
                        else
                        {
                            alert('bruh');
                            text = '';
                            arr = [];
                            $( "#vyvod" ).val( text );
                        };
                        result = 0;
                        break;
                    //если передаётся символ оператора, то сначала проходит проверка на то, не является ли 'text' нулём
                    default:
                        arr.push(Number(text));
                        arr.push($( this ).text());
                        text = '';
                        $( "#vyvod" ).val( '' );
                        break;
                }
            }
            break;
        }
    });
});