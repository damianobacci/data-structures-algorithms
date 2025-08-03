def sum(low, high)
    if low == high
        return low
    else
        return high + sum(low, high - 1)
    end
end