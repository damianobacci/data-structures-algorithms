def find_directories(directory) # only works for two levels deep
    Dir.foreach(directory) do |filename|
        if File.directory?("#{directory}/#{filename}") && filename != '.' && filename != '..'
            puts "#{directory}/#{filename}"
            Dir.foreach("#{directory}/#{filename}") do |inner_filename|
                if File.directory?("#{directory}/#{filename}/#{inner_filename}") && inner_filename != '.' && inner_filename != '..'
                    puts "#{directory}/#{filename}/#{inner_filename}"
                end
            end
        end
    end
end

def find_directories_recursive(directory) # works for any depth
    Dir.foreach(directory) do |filename|
        if File.directory?("#{directory}/#{filename}") && filename != '.' && filename != '..'
            puts "#{directory}/#{filename}"
            find_directories_recursive("#{directory}/#{filename}")
        end
    end
end