class main:
    def __init__(self):
        print("uditha")
class main3:
    def __init__(self):
        print("shashini")

    def uditha(self):
        print("hello")    

class main2(main,main3):
    def __init__(self):
        super(main2).__init__()
        print("vithanage")

        # self.uditha()

    def new(self):
        self.uditha()   




ob = main2()  
ob.new()      