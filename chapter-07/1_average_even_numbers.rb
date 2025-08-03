def average_of_even_numbers(array)
    sum = 0
    count_of_even_numbers = 0

    array.each do |number|
        if number.even?
            sum += number
            count_of_even_numbers += 1
        end
    end
    return sum / count_of_even_numbers
end