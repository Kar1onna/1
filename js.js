alert(Date())
        function q1(){
                document.getElementById("Paimon").src='https://th.bing.com/th/id/OIP.qNEqxyWCKVJ5O7fbgnjNjgHaHa?pid=ImgDet&amp;rs=1';
        }
        function q2(){
        var text_change = document.getElementById('a2');
        text_change.innerHTML = 'P A I M O N';
        }
        function q3() {
                alert('wwwwwwwww')
        }
        function q4() {
                var select = document.getElementById('a4');
                select.style.backgroundColor = 'blue';
                select.style.textAlign = 'center';
                select.style.fontFamily = 'Arial';
        }
        function q51(f){
        return(f-32)*5/9;
    }
        function q52(){
        var select = document.getElementById('a5');
        select.innerHTML = q51(20);
        }
        function q6(){
        var a = parseFloat(prompt('number 1'));
        var b = parseFloat(prompt('number 2'));
        alert(a+b);
    }
    function q7(){
        var name1 = prompt('First Name:');
        var name2 = prompt('Family Name:');
        alert('Nice to meet you '+ name1 + ' ' + name2);
        }
