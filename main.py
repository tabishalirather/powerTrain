def readNumber():
    number = input("Enter a number: ")
    digitsArray = []
    if(len(number) > 1):
        for digit_char in number:
            digit = int(digit_char)
            digitsArray.append(digit)
        print("Array of digits:", digitsArray)
    else:
        print("Single digit number")
    return digitsArray


def raiseToPower(number):

    # number = input("Enter a number: ")
    print("Number:", number)
    j = 0
    while(int(number) / 9 > 1):
        j += 1
        digitsArray = [int(digit) for digit in str(number)]
        print("Array of digits:", digitsArray)
        result = 1
        tempArray = []
        if(len(digitsArray) % 2 == 0):
            for i in range(0, len(digitsArray), 2):
                value = digitsArray[i] ** digitsArray[i+1]
                print("Step", j, ":", digitsArray[i], "^", digitsArray[i+1], "= ", value)
                # print("Value:", value)
                tempArray.append(value)
                result *= tempArray[len(tempArray)-1]
                # print("Result:", result)
            newNum = result
            print("newNum", newNum)
            number = newNum
        elif(len(digitsArray) % 2 != 0):
            print("OddNumber")
            digitsArray.append(1)
            print("Array of digits:", digitsArray)
            for i in range(0, len(digitsArray)-1, 2):
                value = digitsArray[i] ** digitsArray[i+1]
                print("Step", j, ":", digitsArray[i], "^", digitsArray[i+1], "= ", value)
                # print("Value:", value)
                tempArray.append(value)
                result *= tempArray[len(tempArray)-1]
                # print("Result:", result)
            newNum = result
            print("newNum", newNum)
            number = result
            return number
    print("weight", j)


def allNumbers(i):
    # print(i)
    print("Hello")
    number = raiseToPower(i)
    if(number != i):
        print("Not Conway number")
    else:
        print("Conway number", i)
        # break




def main():
    i = 11
    while (i < 2000):
        if(i == 2592):
            print("End")
            break
            # i += 1
        # raiseToPower(i)
        else:
            print("Not 2592")
            allNumbers(i)
            i += 1


main()
