import math


def calculate_cost_and_quantity(wall_size):
    liters_of_paint = wall_size / 3
    paint_cans = math.ceil(liters_of_paint / 18)
    total_price = round(paint_cans * 80.00, 2)

    return paint_cans, total_price


print(calculate_cost_and_quantity(200))
