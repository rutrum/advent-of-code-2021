println("Hello!")

f = open("input.txt", "r")

x_pos = 0
depth = 0
aim = 0

for line in readlines(f)
    s = split(line)
    dir = s[1]
    size = parse(UInt8, s[2])

    if dir == "forward"
        global x_pos += size
        global depth += size * aim
    elseif dir == "down"
        # global depth += size
        global aim += size
    elseif dir == "up"
        # global depth -= size
        global aim -= size
    end
end

println("x_pos: $x_pos")
println("depth: $depth")
println("prod:  ", x_pos * depth)
