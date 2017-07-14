class sub_string {
    str: string;
    display1(str: string) {
        this.str=str;
        var str1: string = '';
        for (let j = 1; j <= this.str.length; j++) {
            for (let i = 0; i <= this.str.length-j; i++) {
                str1=this.str.substr(i, j);
                //console.log(str1);
                return(str1);
            }
        }
    }
}
/*var p = new sub_string("abab");
p.display1();*/