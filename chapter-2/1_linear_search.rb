def linear_search(array, search_value) # linear search in an ORDERED array
    array.each_with_index do |element, index|
        if element == search_value
            return index
        elsif element > search_value # faster than the traditional linear search, because I can stop it as soon as the value I am searching for in out of range
            break
        end 
    end
    return nil
end