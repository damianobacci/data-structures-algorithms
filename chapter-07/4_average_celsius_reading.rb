def average_celsius(fahrenheit_readings)
    celsius_numbers = []

    fahrenheit_readings.each do |fahrenheit_reading|
        celsius_conversion = (fahrenheit_reading - 32) / 1.8
        celsius_numbers.push(celsius_conversion)
    end

    sum = 0.0

    celsius_numbers.each do |celsius_number|
        sum += celsius_number
    end

    return sum / celsius_numbers.length
end