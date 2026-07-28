# Exercise 2: E-commerce Platform Search Function

## Step 1: Understanding Asymptotic Notation

### Big O Notation
Big O notation is used to measure the efficiency of an algorithm by describing how its execution time grows as the input size increases. It helps compare different algorithms and select the most efficient one.

### Search Operation Scenarios

**Best Case:**
The required product is found immediately.

**Average Case:**
The product is found after checking some of the elements.

**Worst Case:**
The product is found at the end of the list or is not present.


## Step 4: Analysis

### Linear Search
- Best Case: O(1)
- Average Case: O(n)
- Worst Case: O(n)

### Binary Search
- Best Case: O(1)
- Average Case: O(log n)
- Worst Case: O(log n)

### Conclusion

Binary Search is more suitable for an e-commerce platform because it provides faster search performance for large datasets. However, it requires the products to be sorted before searching. Linear Search is simple to implement and works with unsorted data but becomes slower as the number of products increases.