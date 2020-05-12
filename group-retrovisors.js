const text = '<b>Hi</b><div>Hey</div><section>Hello</section>'

console.log(text.match(/<(\w+)>.*<\/\1>/gi))