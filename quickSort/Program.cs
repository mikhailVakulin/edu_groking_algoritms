
/// метод разбиения массива для быстрой сортировки
int partition(int[] array, int left, int right) // (массив, первый элемент, последний элемент)
{
    int pivot = array[(left+right)/2];  // индекс опорного элемента
    int i = left;
    int j = right;

    while (i <= j)
    {
        while (array[i] < pivot) i++;
        while (array[j] > pivot) j--;
        if (i <= j)
        {
            swapElenets(array, i, j);
            i++;
            j--;
        }
    }
    return pivot;
}




/// метод меняет элементы местами
void swapElenets(int[] array, int i, int j)  // i,j = индексы элементов для замены
{
    int temp = array[i];
    array[i] = array[j];
    array[j] = temp;

}


/// метод рекурсивной быстрой сортировки
int[] quickSort(int[] array, int left, int right)
{
    int index; // переменная
    if (array.Length <= 1) return array;
    else if (array.Length > 1)
    {
        index = partition(array, left, right);
        if (left < index - 1)
        {
            quickSort(array, left, index - 1);
        }
        if (index < right)
        {
            quickSort(array, index, right);
        }

        return array;
    }

}


int[] testArray = { 4, 2, 6, 5, 3, 9, 1, 10, 8, 7, 4 };

int a = partition(testArray, 0, testArray.Length - 1);
System.Console.WriteLine(a);
System.Console.WriteLine(string.Join(", ", testArray));
//System.Console.WriteLine(string.Join(", ", quickSort(testArray, 0, testArray.Length - 1)));
