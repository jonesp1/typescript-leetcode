function equalPairs(grid: number[][]): number {
    const n = grid.length;
    let count = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (isEqualRowColumn(grid, i, j)) {
                count++;
            }
        }
    }

    return count;
}

function isEqualRowColumn(grid: number[][], rowIndex: number, colIndex: number): boolean {
    const n = grid.length;

    // Check if row and column have same length
    if (grid[rowIndex].length !== n || colIndex >= n) {
        return false;
    }

    // Check if elements of row and column are equal
    for (let i = 0; i < n; i++) {
        if (grid[rowIndex][i] !== grid[i][colIndex]) {
            return false;
        }
    }

    return true;
}

//example
console.log(equalPairs([[3, 2, 1], [1, 7, 6], [2, 7, 7]]));

