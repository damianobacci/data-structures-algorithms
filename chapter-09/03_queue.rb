class Queue
    def initialize
        @data = []
    end

    def enqueue(el)
        @data << el
    end

    def dequeue
        @data.shift
    end

    def read
        @data.first
    end
end