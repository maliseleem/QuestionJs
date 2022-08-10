function func() {
  setTimeout(() => {
    console.log('from func');
  }, 1000);
}

function func1() {
  console.log('from func2');
}

func()
func1()