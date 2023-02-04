# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_02_03_185434) do
  create_table "laboratories", force: :cascade do |t|
    t.string "university"
    t.string "department"
    t.string "field"
    t.string "major"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "survey_id", null: false
    t.index ["survey_id"], name: "index_laboratories_on_survey_id"
  end

  create_table "laboratory_users", force: :cascade do |t|
    t.integer "rank", null: false
    t.integer "user_id", null: false
    t.integer "laboratory_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["laboratory_id"], name: "index_laboratory_users_on_laboratory_id"
    t.index ["user_id"], name: "index_laboratory_users_on_user_id"
  end

  create_table "surveys", force: :cascade do |t|
    t.string "name"
    t.integer "max_request", default: 7, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "teachers", force: :cascade do |t|
    t.string "name"
    t.string "position"
    t.integer "laboratory_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["laboratory_id"], name: "index_teachers_on_laboratory_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "auth0_user_id", null: false
    t.integer "affiliation", default: 0, null: false
    t.integer "grade"
    t.float "gpa"
    t.boolean "admin", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "laboratories", "surveys"
  add_foreign_key "laboratory_users", "laboratories"
  add_foreign_key "laboratory_users", "users"
  add_foreign_key "teachers", "laboratories"
end
