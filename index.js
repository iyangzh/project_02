import $ from 'jQuery'

//jQuery入口函数
$(function(){
    $('li:odd').css('background-color', 'red')
    $('li:even').css('background-color', 'yellow')
})